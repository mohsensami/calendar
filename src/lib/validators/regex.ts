const testEmail = (value: any) => {
    const emailPattent = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
    return emailPattent.test(value);
};

const testCodeMelli = (value: any) => {
    // Test
};

const testPhoneNumber = (value: any) => {
    // Test
};

export default {
    testEmail,
    testCodeMelli,
    testPhoneNumber,
};
