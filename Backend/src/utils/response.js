export const sendSuccess = (res, statusCode = 200, message = 'Success', data = null) => {
    const responsePayload = { success: true, message };
    if (data !== null) responsePayload.data = data;
    return res.status(statusCode).json(responsePayload);
};

export const sendError = (res, statusCode = 500, message = 'Internal Server Error', error = null) => {
    const responsePayload = { success: false, message };
    if (error && process.env.NODE_ENV !== 'production') responsePayload.error = error;
    return res.status(statusCode).json(responsePayload);
};
