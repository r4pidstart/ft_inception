import styled from "styled-components"
import logo from "./sans.png"
import { Link } from 'react-router-dom';

const _post_thumbnail = styled.img``
const _post_title = styled.p
`
    font-weight: 250;
    color: #61DBFB;
`
const _post_date = styled.p
`
    font-style: italic;
    font-weight: 200;
    color: #000000;
`
const _post_tag = styled.p
`
    font-style: italic;
    font-weight: bolder;
    color: #999999;
`

function _post_normal_frame(props)
{
    return (
        <_post_normal_frame_container>
            <_post_thumbnail src={logo}></_post_thumbnail>
            <_post_normal_frame_text_container>
                <_post_title>{props.content}</_post_title>
                <_post_date>01-02-2001</_post_date>
                <_post_tag>#sans</_post_tag>
            </_post_normal_frame_text_container>
        </_post_normal_frame_container>
    )
}

function _post_normal()
{
    let ret=[]
    for(let i=0; i<10; i++)
    {
        ret.push(
            <Link to={`/post/${i}`}> <_post_normal_frame key={i} content={i}></_post_normal_frame> </Link>
            // <_post_normal_frame content={i}></_post_normal_frame>
        );
    }
    return (
        <_post_normal_container> {ret} </_post_normal_container>
    );
}

const _post_normal_frame_text_container = styled.div
`
    padding: 0 0 0 0.5em;
    ${_post_title}
    {
        margin: 0;
        font-size: 1.8em;
    }

    ${_post_tag}
    {
        margin: 0;
    }
`

const _post_normal_frame_container = styled.div
`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 350px;
    flex-basis: 250px;
    flex-shrink: 0;
    width: 30%;
    border-bottom: solid #61DBFB 0.15em;
    padding: 0.5em 1em;
    margin: 3em 1.5em;
    ${_post_thumbnail}
    {
        width: 100%;
    }
`

const _post_normal_container = styled.li
`
    display: flex;
    flex-wrap: wrap;
    margin: 1em 1em;
    justify-content: center;
`

function _post_fixed_frame(props)
{
    return (
        <_post_fixed_frame_container>
            <_post_thumbnail src={logo}></_post_thumbnail>
            <_post_fixed_frame_text_container>
                <_post_title>{props.content}</_post_title>
                <_post_date>01-01-2001</_post_date>
                <_post_tag>#wa</_post_tag>
            </_post_fixed_frame_text_container>
        </_post_fixed_frame_container>
    )
}

const _post_fixed_frame_text_container = styled.div
`
    box-sizing: border-box;
    padding: 1em 0;
    ${_post_title}
    {
        font-size: 3em;
        margin: 0;
    }
    
    ${_post_date}
    {
        font-size: 1em;
    }
`

const _post_fixed_frame_container = styled.div
`
    display: flex;
    border: outset #61DBFB;
    margin: 1em 1em;
    height: 170px;
    flex-basis: 400px;
    flex-shrink: 0;
    justify-content: flex-start;

    ${_post_thumbnail}
    {
        margin: 0.5em 1.5em 0.5em 0.5em;
        max-width: 100%;
    }
`

const _post_fixed_container = styled.div
`
    box-sizing: border-box;
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
    justify-content: center;
`

function _post_fixed()
{
    return (
        <_post_fixed_container>
            {/* <_post_fixed_frame key="01" content="Sans"></_post_fixed_frame>
            <_post_fixed_frame key="02" content="sAns"></_post_fixed_frame>
            <_post_fixed_frame key="03" content="saNs"></_post_fixed_frame>
            <_post_fixed_frame key="04" content="sanS"></_post_fixed_frame> */}
            <Link to="/post/3"> <_post_fixed_frame key="01" content="Sans3"></_post_fixed_frame> </Link>
            <Link to="/post/4"> <_post_fixed_frame key="02" content="sAns4"></_post_fixed_frame> </Link>
            <Link to="/post/5"> <_post_fixed_frame key="03" content="saNs5"></_post_fixed_frame> </Link>
            <Link to="/post/6"> <_post_fixed_frame key="04" content="sanS6"></_post_fixed_frame> </Link>
        </_post_fixed_container>
    )
}

const _post_hbar = styled.hr
`
    width: 100%;
    height: 0.15em;
    border: none;
    justify-content: center;
    background-color: #61DBFB;
`

const _posts_container = styled.section
`
    margin: 0 0 0 20vw;
    padding: 2% 5%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: flex-end;
    flex-wrap: wrap;
`

function _posts()
{
    return (
        <_posts_container>
            <_post_fixed></_post_fixed>
            <_post_hbar></_post_hbar>
            <_post_normal></_post_normal>
        </_posts_container>
    )
}

export default _posts;