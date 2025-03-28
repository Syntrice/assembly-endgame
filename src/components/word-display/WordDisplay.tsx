interface WordDisplayProps {
    word: string
}

export default function WordDisplay({ word } : WordDisplayProps) {
    
    const chars = word.split('');
    
    return (
        <div className="flex justify-center gap-2 text-3xl">
            {chars.map((char, index) => (
                <span className="bg-theme-mid w-12 h-12 border-b-theme-foreground border-b-2 text flex justify-center items-center" key={index}>{char}</span>
            ))}
        </div>
    );
}