import { Label } from '@radix-ui/react-label';
import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnNumberedList, BtnRedo, BtnUnderline, BtnUndo, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg';
import { Button } from './ui/button';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { AIChatSession } from '../../service/AiModel';
import toast from 'react-hot-toast';


const RichTextEditor = ({ label, defaultValue, handleTextEditorChange, title }) => {
    const [value, setValue] = useState(defaultValue);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
        handleTextEditorChange(e);
    }

    const GenerateAIWorkDescription = async () => {
        if (!title) {
            toast.error("Please provide position title first");
            return;
        }

        try {
            setLoading(true);
            const prompt = `Position Title: ${title}, based on my position title give me 5-7 bulleted points of mid level experience for my resume, give me result in HTML format like <ul><li>some text</li><li>some more text</li></ul>.`
            const response = await AIChatSession.sendMessage(prompt);
            const syntheticEvent = {
                target: {
                    value: response.response.text().replaceAll("\"", "")
                }
            };
            handleChange(syntheticEvent);
            toast.success("Response generated");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-baseline my-1'>
                <Label>{label}</Label>
                <Button variant="outline" className="flex gap-1" onClick={GenerateAIWorkDescription}>
                    {
                        !loading ? <><BrainCircuit /> Generate from AI</> : <><Loader2 className='animate-spin' /> Generating...</>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={handleChange} containerProps={{ style: { resize: 'vertical' } }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <Separator />
                        <BtnUndo />
                        <BtnRedo />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnClearFormatting />
                        <HtmlButton />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor