import "./globals.css";


export const metadata = {
  title: "Rudhra Bharathy",
  description: "My Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout