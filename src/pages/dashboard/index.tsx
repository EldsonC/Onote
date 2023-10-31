import { useEffect, useState } from "react";
import { Card } from "../../components/cards";
import { Header } from "../../components/header";
import { SubHeader } from "../../components/subheader";
import { DashStyle } from "./style";
import CardEditor from "../../components/cards/cardEdit";

interface CardData {
    title: string;
    text: string;
    date: string;
}

export function Dashboard() {
    const [ title,setTitle ] = useState<string>("Type a title...");
    const [ text, setText ] = useState<string>("Type your note...");
    const [ isEditing, setIsEditing ] = useState<boolean>(false);
    const [ cards, setCards ] = useState<CardData[]>([]);

    useEffect(() => {
        const storedCards = localStorage.getItem("cards");
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        }
    }, [])

    // useEffect(() => {
    //     const storedCards = localStorage.getItem("cards");
    //     if (storedCards) {
    //         localStorage.setItem("cards", JSON.stringify(cards));
    //     }

    // }, [cards])

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = () => {
        if( isEditing ) {
            const currentDate: Date = new Date();
            const options: Intl.DateTimeFormatOptions = {
                month: "2-digit",
                day: "numeric"
            }

            const formattedDate: string = currentDate.toLocaleString("pt-BR", options);
            const newCard: CardData = { title, text, date: formattedDate };
            setCards([...cards, newCard]);
            setIsEditing(false);
            setTitle("Type a title...");
            setText("Type your note...");
            localStorage.setItem("cards", JSON.stringify([...cards, newCard]))
        }
    }

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    return (
        <>
            <Header/>
            <DashStyle>
                <SubHeader addCard={handleEditClick}/>
                <div className="container_list">
                    {cards.map((card, keys) => {
                        return (
                            <Card 
                                key={keys}
                                title={card.title}
                                text={card.text}
                                date={card.date}
                                onEdit={handleEditClick}
                            />
                        )
                    })}
                    {isEditing ? (
                        <CardEditor
                        initialTitle={title}
                        initialText={text}
                        onTitleChange={handleTitleChange}
                        onTextChange={handleTextChange}
                        onSave={handleSaveClick}
                        />
                    ) : false}
                </div>
            </DashStyle>
        </>
    );
};