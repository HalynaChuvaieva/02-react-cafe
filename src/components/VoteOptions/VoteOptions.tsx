import type { MouseEventHandler } from 'react';
import css from './VoteOptions.module.css';
interface VoteOptionsProps{
    onVote: MouseEventHandler<HTMLButtonElement>;
    onReset: MouseEventHandler<HTMLButtonElement>;
    canReset: boolean;
}


export default function VoteOptions({ onVote, onReset, canReset }:VoteOptionsProps) {
    return (
        <div className={css.container}>
            <button onClick={onVote} className={css.button}>Good</button>
            <button onClick={onVote} className={css.button}>Neutral</button>
            <button onClick={onVote} className={css.button}>Bad</button>
            {canReset && (<button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>)}
        </div>

    )
}