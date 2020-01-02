export default window.location.href.includes("localhost")
  ? `http://localhost:4000`
  : "https://kudos-love.herokuapp.com/";
