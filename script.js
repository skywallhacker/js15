let companies = [
    {
        name: 'sheroz_io',
        budget: 75000,
        tax: 12,
        expensesPerYear: [5000, 3000, 25000]
    },
    {
        name: 'shavkat_mnogogovority',
        budget: 125000,
        tax: 14,
        expensesPerYear: [10000, 4500, 60000]
    },
    {
        name: 'kamoliddin_posuda',
        budget: 150000,
        tax: 12,
        expensesPerYear: [70000, 2000, 15000]
    },
    {
        name: 'azamat_niche',
        budget: 90000,
        tax: 7,
        expensesPerYear: [21000, 1000, 6000]
    },
    {
        name: 'muhammad',
        budget: 80000,
        tax: 14,
        expensesPerYear: [10000, 500, 1680]
    },
    {
        name: 'firuz_nosbiznes',
        budget: 195000,
        tax: 21,
        expensesPerYear: [7000, 15000, 5000]
    },
    {
        name: 'azim_trans_mchj',
        budget: 200000,
        tax: 12,
        expensesPerYear: [70000, 12000, 5000]
    },
    {
        name: 'malika_beaty_salon',
        budget: 150000,
        tax: 12,
        expensesPerYear: [40000, 5000, 7000]
    },
]

for (let comp of companies) {

    let expensesPerYear = Math.round(comp.expensesPerYear.reduce((a, b) => a + b))

    // console.log(expensesPerYear);

    let mounthPer = Math.round(expensesPerYear / 12)

    // console.log(mounthPer);

    let mounthBudget = Math.round(comp.budget / 12)

    // console.log(mounthBudget);

    let mounthTax = Math.round(mounthBudget / 100 * comp.tax)

    // console.log(mounthTax);

    let procenPer = Math.round(mounthPer * 100 / mounthBudget)

    // console.log(procenPer);

    let total = Math.round(mounthPer + mounthTax)

    // console.log(total);

    document.write(`
        name: ${comp.name} <br>
        budget: ${comp.budget}$ <br>
        tax: ${comp.tax}% <br>
        expensesPerYear: ${comp.expensesPerYear}$ <br>
        расходы за месяц: (включая налог) ${total}$ <br>
        расходы за месяц: ${mounthPer}$ <br>
        бьюджет за месяц: ${mounthBudget}$ <br>
        соотношение бьюджета и расходов: ${procenPer}% <hr>
    `)
}


// найти расходы за месяц (включая налог)
// найти расходы за месяц
// найти бьюджет за месяц
// найти соотношение бьюджета и расходов показать