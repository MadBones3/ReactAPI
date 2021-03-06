// Base URL
const base_url = 'https://api.rawg.io/api/';
const apiKey = 'key=fef7dadbe48345769dcbbb954b890459'

//Getting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

//Getting the Day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// upcoming games
const upcoming_games = `games?${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// new games
const newGames = `games?${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// GAME DETAILS 
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&${apiKey}`;
// GAME screenshots 
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&${apiKey}`;

// Search Game
export const searchGameURL = (game_name) => `${base_url}games?${apiKey}&search=${game_name}&page_size=9`;
