async function apiCall(endpoint, options) {

    // Check for endpoint if available
    if (typeof endpoint === 'undefined') throw new Error('Endpoint must be specified!');

    // Set apiUrl
    const apiUrl = CONFIG.API_BASE + endpoint

    // Set and configure API Request options
    options = options || {}
    const body = options.body
    const method = options.method || 'GET'
    const headers = options.headers || {}

    return fetch(apiUrl, {
        method,
        headers,
        body
    }).then(async response => {
        try {
            const json = await response.clone().json()
            return json
        } catch (e) {
            console.log(e);
            return await response.text()
        }
    })
}

// Exports API related methods
const api = {
    request: apiCall
}
