import React, { useState, useEffect } from "react";
import "./ChelseasLiveScore.css"; // Import styles

const API_KEY = "5c92512edbbf45d985428cbb86f07ad1";
const TEAM_ID = 61; // Chelsea FC's ID in Football-Data.org

const ChelseasLiveScore = () => {
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://api.football-data.org/v4/teams/${TEAM_ID}/matches?competitions=CL,PL,EL,ECL,FA,FL,WC&limit=20`,
          { headers: { "X-Auth-Token": API_KEY } }
        );
        const data = await response.json();

        if (!data.matches || data.matches.length === 0) {
          setError("No Chelsea match data available.");
          return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let selectedMatch = null;
        for (let match of data.matches) {
          const matchDate = new Date(match.utcDate);
          matchDate.setHours(0, 0, 0, 0);

          if (match.status === "LIVE") {
            selectedMatch = match; // Live match gets priority
            break;
          } else if (matchDate.getTime() === today.getTime() && match.status === "FINISHED") {
            selectedMatch = match; // Today's finished match
            break;
          } else if (matchDate > today) {
            selectedMatch = match; // Upcoming match
            break;
          }
        }

        if (selectedMatch) {
          setMatch(selectedMatch);
        } else {
          setError("No relevant match data available.");
        }
      } catch (err) {
        setError("Failed to load match data.");
        console.error("Error fetching Chelsea's match:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <div className="chelsea-live-score">Loading...</div>;
  if (error) return <div className="chelsea-live-score error">{error}</div>;
  if (!match) return <div className="chelsea-live-score">No match found.</div>;

  const matchDate = new Date(match.utcDate);
  const matchDayFormatted = matchDate.toLocaleDateString("en-US", { weekday: "long" });

  const isUpcoming = match.status === "SCHEDULED" || match.status === "TIMED";
  const isLive = match.status === "LIVE";
  const isFinishedToday = new Date(match.utcDate).toDateString() === new Date().toDateString() && match.status === "FINISHED";

  return (
    <div className="chelsea-live-score">
      <div className="team-info">
        <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="team-logo" />
        <span className="team-name">{match.homeTeam.shortName}</span>
      </div>

      <div className="match-info">
        {isLive ? (
          <span className="score live">Live: {match.score.fullTime.home} - {match.score.fullTime.away}</span>
        ) : isFinishedToday ? (
          <span className="score">Score: {match.score.fullTime.home} - {match.score.fullTime.away}</span>
        ) : isUpcoming ? (
          <span className="match-status upcoming">Upcoming: {matchDayFormatted}</span>
        ) : (
          <span className="match-status">No Match</span>
        )}

        <img src={match.competition.emblem} alt={match.competition.name} className="league-logo" />
      </div>

      <div className="team-info">
        <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="team-logo" />
        <span className="team-name">{match.awayTeam.shortName}</span>
      </div>
    </div>
  );
};

export default ChelseasLiveScore;
