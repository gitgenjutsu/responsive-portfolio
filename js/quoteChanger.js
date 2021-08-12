  var quote = [
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
      "“First, solve the problem. Then, write the code.” – John Johnson",
      "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
      "Be you the world will adjust.",
      "Creating a life I love.",
      "Always be positive.",
      "Some walk you have to take alone.",
  ];


  function randomQuote() {
      var data = "";
      let i = 0;
      let temp = (quote[Math.floor(Math.random() * quote.length)]);
      data += `<tr><td> ${i + 1} </td> <td> ${temp} </td></tr>`;
      document.querySelector("#tableBody").innerHTML = data;
  }

  document.querySelector("#quoteChanger").onclick = randomQuote;


  let quoteNum = 0;

  function nextQuote() {
      if (quoteNum > quote.length - 1) {
          quoteNum = 0;
      }
      sequenceQuote();
      quoteNum++;
  }
  document.querySelector("#next").onclick = nextQuote;

  function prevQuote() {
      if (quoteNum < 0) {
          quoteNum = quote.length - 1;
      }
      sequenceQuote();
      quoteNum--;
  }
  document.querySelector("#prev").onclick = prevQuote;

  function sequenceQuote() {
      var data = "";
      let i = 0;
      data += `<tr><td> ${i + 1} </td> <td> ${quote[quoteNum]} </td></tr>`;
      document.querySelector("#tableBody").innerHTML = data;
  }
  sequenceQuote();