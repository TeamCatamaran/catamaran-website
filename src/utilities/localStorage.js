const defaultUserPreferences = {
    acceptGdpr: false,
    highContrast: false,
};

const _getUserPreferences = () => {
    return JSON.parse(localStorage.catamaranPrefs || null) || defaultUserPreferences;
};


const _saveUserPreferences = ({
    acceptGdpr,
    highContrast,
}) => {

    const currentPrefs = _getUserPreferences();

    if (acceptGdpr != null) {
        currentPrefs.acceptGdpr = acceptGdpr;
    }

    if (highContrast != null) {
        currentPrefs.highContrast = highContrast;
    }

    localStorage.catamaranPrefs = JSON.stringify(currentPrefs);
};


/*
-----------------------------------------------------------------------------------------
Exports
-----------------------------------------------------------------------------------------
*/

export const localStorageUtils = {
    getUserPreferences: _getUserPreferences,
    saveUserPreferences: _saveUserPreferences,
};