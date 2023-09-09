import { useParams } from "react-router-dom";
import styled from "styled-components";
import _posts from "./posts_section";

const _title = styled.p``

const _date = styled.p``

const _content = styled.p``

const _content_container = styled.div
`
    width: 100%;

    ${_content}
    {
        font-size: 1em;
    }
`

const _hbar = styled.hr
`
    width: 100%;
    height: 0.15em;
    border: none;
    background-color: #61DBFB;
`

const _title_container = styled.div
`   
    display: flex;
    align-items: baseline;
    width: 100%;
    flex-wrap: wrap;

    ${_title}
    {
        width: 80%;
        font-size: 2em;
        font-weight: 500;
        color: #307686;
        margin: 0;
    }
    ${_date}
    {   
        width: 20%;
        font-size: 1.2em;
        font-style: italic;
        text-align: right;
        font-weight: 200;
        color: #000000;
    }
`

const _post_container = styled.div
`
    box-sizing: border-box;
    width: 80vw;   
    margin: 0 0 0 20vw;
    padding: 5%;
    padding-right: 8%;

    display: flex;
    flex-wrap: wrap;
`

function _post(props)
{
    return (
        <_post_container>
            <_title_container> 
                <_title>{props.title}</_title> <_date>{props.date}</_date> 
                <_hbar></_hbar>
            </_title_container>
            <_content_container> <_content>{props.content}</_content> </_content_container>
        </_post_container>
    );
}

const sample_string=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem non rutrum fringilla. Duis pulvinar iaculis elementum. Sed consectetur lorem in nunc sollicitudin tincidunt sit amet sit amet felis. Duis eget lobortis odio. Mauris et justo ac enim varius fermentum. Nam tempor orci ac ullamcorper suscipit. Vivamus blandit facilisis aliquet. Fusce bibendum libero eget odio rhoncus dignissim. Integer aliquet dolor in malesuada molestie. Nam eget egestas quam. Praesent condimentum faucibus dignissim. Curabitur egestas sollicitudin ipsum, et feugiat mi tempus vel.

Donec purus sem, sagittis a malesuada blandit, vulputate id orci. Sed ut malesuada arcu, vel convallis lacus. Curabitur commodo vehicula lacus, sed fringilla enim commodo vel. Aenean ante dolor, fringilla eget volutpat a, rutrum suscipit urna. Ut leo justo, pulvinar eu ligula sed, suscipit semper est. Donec volutpat, velit quis commodo placerat, nulla nisl varius odio, eget sodales quam nunc et ex. Morbi volutpat rutrum massa fermentum feugiat. Proin tempor libero at finibus consequat. Suspendisse elementum sagittis sem ut venenatis. Suspendisse faucibus sit amet nulla vel posuere. Nulla congue sagittis nunc, congue sollicitudin diam sodales quis. Nulla rutrum lorem ut facilisis varius. Mauris et convallis elit. Donec dignissim felis ipsum, sit amet lobortis justo interdum eu.

Nam finibus nisl in purus ultrices, ac malesuada augue interdum. Cras quis leo sodales, varius elit vel, sodales risus. In hac habitasse platea dictumst. Nullam in facilisis erat. Donec fermentum, ante sed pellentesque laoreet, nulla nisl placerat ante, vel vulputate velit purus quis tortor. Nulla nec diam sit amet tortor dapibus molestie. In augue massa, venenatis ut venenatis nec, suscipit eu velit. Praesent a odio iaculis, sodales dui luctus, dignissim urna.

`

function _post_router()
{
    const POST_CNT=10;
    const idx=useParams().post_idx;

    if(idx < POST_CNT)
        return (<_post title={`${idx}번 게시물 `.repeat(idx)} date="2021/04/01" content={sample_string.repeat(idx)}></_post>);
    return (<_posts></_posts>)
}

export default _post_router;