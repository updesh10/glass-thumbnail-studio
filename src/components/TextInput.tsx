import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface TextInputProps {
  onTextChange: (text: string) => void;
}

const TextInput = ({ onTextChange }: TextInputProps) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    onTextChange(value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Describe Your Thumbnail</h3>
      
      <div className="glass-card">
        <Textarea
          value={text}
          onChange={handleChange}
          placeholder="Describe your thumbnail idea... (e.g., 'Modern gaming thumbnail with neon effects and bold text overlay')"
          className="min-h-32 resize-none border-0 bg-transparent placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      
      <p className="text-xs text-muted-foreground">
        Be specific about colors, style, text, and effects you want in your thumbnail.
      </p>
    </div>
  );
};

export default TextInput;