document.getElementById("calculate").addEventListener("click", function () {
  let accountBalance = parseFloat(
    document.getElementById("startingBalance").value
  );
  const riskPerTrade = parseFloat(
    document.getElementById("percentageRisk").value
  );
  const stopLossPips = parseFloat(
    document.getElementById("stopLossPips").value
  );
  const takeProfitPips = parseFloat(document.getElementById("tpPips").value);
  const totalTrades = 30; // Total number of trades to calculate

  const resultsTable = document.getElementById("resultsTable");
  resultsTable.innerHTML = ""; // Clear existing table rows

  for (let tradeNumber = 1; tradeNumber <= totalTrades; tradeNumber++) {
    const amountAtRisk = accountBalance * (riskPerTrade / 100);
    const profitAmount = amountAtRisk * (takeProfitPips / stopLossPips);
    const newBalance = accountBalance + profitAmount;
    const positionSize = (amountAtRisk / stopLossPips) * 0.1; // Simplified assumption
    const ROI = (takeProfitPips / stopLossPips).toFixed(2); // Adjusted ROI calculation

    // Append results to the table
    const row = `<tr>
<td>${tradeNumber}</td>
<td>$${accountBalance.toFixed(2)}</td>
<td>${riskPerTrade}%</td>
<td>$${amountAtRisk.toFixed(2)}</td>
<td>${((profitAmount / accountBalance) * 100).toFixed(2)}%</td>
<td>$${profitAmount.toFixed(2)}</td>
<td>${stopLossPips}</td>
<td>${takeProfitPips}</td>
<td>${ROI}</td>
<td>${positionSize.toFixed(2)}</td>
<td>$${newBalance.toFixed(2)}</td>
</tr>`;

    resultsTable.innerHTML += row; // Append the row to the table

    // Update accountBalance for next trade
    accountBalance = newBalance;
  }
});
