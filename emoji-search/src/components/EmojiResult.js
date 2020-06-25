import React, { useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';




const EmojiResult = () =>{
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }
    return (
    <div class="component-emoji-results">
        <div class="component-emoji-result-row copy-to-clipboard" data-clipboard-text="💯">
            <img alt="100" src="//cdn.jsdelivr.net/emojione/assets/png/1f4af.png" />
            <span class="title">100</span><span class="info">Click to copy emoji</span>
        </div>
        <div>
            <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} skinTone={SKIN_TONE_MEDIUM_DARK} groupNames={{smileys_people:"PEOPLE"}}/>
            {/* { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>} */}
        </div>
    </div>
   )
}
   
    


export default EmojiResult
