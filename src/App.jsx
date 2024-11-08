import Text from "./components/Text";

function App() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-full">
            <img src="./assets/avatar.svg" alt="avatar" className="w-60" />
            <Text type="h1" bold center>
                Hey 👋🏻 , danke das du mein <br /> React Template benutzt! 
            </Text>
        </div>
    );
}

export default App;
