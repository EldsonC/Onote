import { CardStyle } from "./style";

interface CardEditorProps {
    initialTitle: string;
    initialText: string;
    onSave: () => void;
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
  
const CardEditor: React.FC<CardEditorProps> = ({ initialTitle, initialText, onSave, onTitleChange, onTextChange }) => {
    const handleSaveClick = () => {
        onSave();
    };

    return (
        <CardStyle className="card-edit">
            <input type="text" value={initialTitle} onChange={onTitleChange} />
            <textarea value={initialText} onChange={onTextChange} />
            <button onClick={handleSaveClick}>Salvar</button>
        </CardStyle>
    );
};
  
export default CardEditor;