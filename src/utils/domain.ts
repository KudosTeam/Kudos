export default window.location.href.includes("localhost")
  ? `http://localhost:4000/api`
  : window.location.href.includes("stg-kudos-love")
  ? "https://stg-kudos-love.herokuapp.com/"
  : "https://kudos-love.herokuapp.com/";
