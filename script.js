function recommendGift() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);

    let giftResult = 'No gift recommendations available';

    const giftSuggestions = {
        male: {
            0: 'Baby toys',
            5: 'Soft stuffed animals',
            10: 'LEGO sets',
            15: 'Board games',
            20: 'Sports equipment'
        },
        female: {
            0: 'Baby clothes and accessories',
            5: 'Educational toys',
            10: 'Art and craft supplies',
            15: 'Books',
            20: 'Musical instruments'
        }
    };

    if (giftSuggestions[gender] && giftSuggestions[gender][age]) {
        giftResult = `Recommended gift for a ${age}-year-old ${gender}: ${giftSuggestions[gender][age]}`;
    }

    document.getElementById('giftResult').innerText = giftResult;
}