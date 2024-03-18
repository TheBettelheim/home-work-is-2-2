function calculate() {
    const brickPrice = parseFloat(document.getElementById('brick').value);
    const brickQuantity = parseFloat(document.getElementById('kolvobrick').value);
    const cementPrice = parseFloat(document.getElementById('cement').value);
    const cementQuantity = parseFloat(document.getElementById('kolvocement').value);
    const boardPrice = parseFloat(document.getElementById('doski').value);
    const boardQuantity = parseFloat(document.getElementById('doskikolvo').value);

    if (!brickPrice || !brickQuantity || !cementPrice || !cementQuantity || !boardPrice || !boardQuantity) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const totalBrickCost = brickPrice * brickQuantity;
    const totalCementCost = cementPrice * cementQuantity;
    const totalBoardCost = boardPrice * boardQuantity;
    const totalCost = totalBrickCost + totalCementCost + totalBoardCost;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Общая стоимость: ${totalCost.toFixed(2)} руб.`;
}
