/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'ecomspark.com',
                pathname:'/**',

            }
        ],
    },
};

export default nextConfig;
