const allowedOrigins = [
    'https://localhost:5173'
]

export const corsOptions = () => {
    origin: (origin,callback) => {
        // Allow requests with no origin (like mobile apps, curl, or Postman)
        if(!origin) return callback(null,true)

        if(allowedOrigins.includes(origin)) {
            callback(null,true); //origin is allowed
        }else {
            callback(new Error('Blocked by Security Framework: CORS Restriction'));
        }
    };
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
    allowedHeaders: ['Content-Type','Authorization'];
    credentails: true;
    optionSuccessStatus: 200
}