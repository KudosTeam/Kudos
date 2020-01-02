export default window.location.href.includes("localhost")
  ? `http://localhost:4000/api`
  : "https://kudos-love.herokuapp.com/";
