const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const value = await response.json();

    if (value.title === "No Definitions Found") {
      resultDiv.innerHTML = `<p>Word not found.</p>`;
    } else {
      const definitions = value[0].meanings[0];
      resultDiv.innerHTML = `
        <h2><strong>Word:</strong> ${value[0].word}</h2>
        <p><strong>Part of Speech:</strong> ${definitions.partOfSpeech}</p>
        <p><strong>Meaning:</strong> ${
          definitions.definitions[0].definition === undefined
            ? "Not found"
            : definitions.definitions[0].definition
        }</p>
        <p><strong>Example:</strong> ${
          definitions.definitions[0].example === undefined
            ? "Not found"
            : definitions.definitions[0].example
        }</p>
        <p><strong>Antonyms:</strong></p>
      `;

      if (definitions.antonyms.length === 0) {
        resultDiv.innerHTML += '<span>Not found</span>';
      } else {
        let antonymsList = '<ul>';
        for (let i = 0; i < definitions.antonyms.length; i++) {
          antonymsList += `<li>${definitions.antonyms[i]}</li>`;
        }
        antonymsList += '</ul>';
        resultDiv.innerHTML += antonymsList;
      }

      if (value[0].sourceUrls) {
        resultDiv.innerHTML += `<a href="${value[0].sourceUrls[0]}" target="_blank">Read More</a>`;
      }
    }
  } catch (error) {
    resultDiv.innerHTML = `<p>There was an error fetching the word data.</p>`;
  }
};
