/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/api/og",
            }
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                pathname: "/user-attachments/**"
            }
        ]
    }
};

export default nextConfig;
