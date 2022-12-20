const player = ["Tina", " Jorge", "Julien"];

async function getResults() {
  function luckyDraw() {
    const win = Boolean(Math.round(Math.random()));
    try {
      if (win) {
        return `${player} won a prize in the draw!`;
      }
    } catch (error) {
      console.error(new Error(`${player} lost the draw.`));
    }
  }
  const data = await luckyDraw();
  console.log(data);
}
getResults();
//nested luckyDraw within the getResults async function
