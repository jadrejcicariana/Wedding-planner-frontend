export default { 
    newExpenseTitle: '',
    newExpensePrice: '',
    nextExpenseId: 4,
    newGuestName: '',
    nextGuestId: 4,
    resultTotal: 0,
    resultPaid: 0,
    resultUnpaid: 0,
    resultConfirmed: 0,
    resultTotalGuests: 0,
    resultDeclined: 0,
    resultAwaiting: 0,

    details: {
        gname: '',
        bname: '',
        date: '',
        time: '',
        location: '',
    },
    expenses: [
        {
            id: 1,
            title: 'test1',
            price: 1,
            
        },
        {
            id: 2,
            title: 'test2',
            price: 2,
            
        },
        {
            id: 3,
            title: 'test3',
            price: 3,
            
        },
    ],
    checkedExpenses: [

    ],
    guests: [
        {
            id: '1',
            name: 'test1',
        },
        {
            id: '2',
            name: 'test2',
        },
        {
            id: '3',
            name: 'test3',
        },
    ],
    confirmedGuests: [


    ],
    declinedGuests: [

    ]
};