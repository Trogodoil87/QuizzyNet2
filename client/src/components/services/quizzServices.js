const baseUrl = 'http://localhost:3030/data/quizz';

export const create = async (quizzData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'X-Authorization': ''
        },
        body: JSON.stringify(quizzData)
    });

    return response;
}