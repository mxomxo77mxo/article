import React, {Component} from 'react';
import {connect} from "react-redux";
import _ from 'lodash'

import {getArticle, getComments} from "./store/actions/article";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0,
            commentShow: false,
            repliesShow: false
        }
    }


    componentDidMount() {
        this.props.getArticle()
        this.props.getComments()
    }

    commentShow = () => {
        const {commentShow} = this.state
        this.setState({
            commentShow: !commentShow
        })
    }

    repliesShow = () => {
        const {repliesShow} = this.state
        this.setState({
            repliesShow: !repliesShow
        })
    }

    handleClick = (c) => {
        if (!c.likes) {
            c.likes = 0
        }
        c.likes += 1
        this.setState({
            likeCount: c.likes
        })
    }

    render() {
        const {commentShow, repliesShow} = this.state
        const {article, comments} = this.props
        return (
            <>
                <Container>
                    <Grid container justify='space-around' alignItems='center'>
                        <Typography variant='h3' color='secondary'>{article.title}</Typography><br/>
                        <Typography variant='h4'
                                    color='primary'>{new Date(article.date).toLocaleDateString()}
                        </Typography><br/>
                    </Grid>
                    <span dangerouslySetInnerHTML={{__html: article.text}}/>
                </Container>
                <Container>
                    <Typography variant='h5' color='primary' onClick={this.commentShow}>COMMENTS</Typography>
                    {commentShow &&
                    <>
                        {_.map(comments, (c) => (
                            <div key={c.id}>
                                <Typography variant='h6' color='secondary'>{c.name}</Typography>
                                <p><span dangerouslySetInnerHTML={{__html: c.commentText}}/></p>
                                <Button variant='contained' color='secondary'
                                        onClick={() => this.handleClick(c)}><ThumbUpAltIcon/> {c.likes}</Button>
                                {c.replies &&
                                <>
                                    <Typography color='primary' variant='h6'
                                                onClick={this.repliesShow}>Replies</Typography>
                                    {repliesShow &&
                                    <div style={{marginLeft: 100}}>
                                        {_.map(c.replies, (r) => (
                                            <>
                                                <Typography color='primary'>{r.name}</Typography>
                                                <span dangerouslySetInnerHTML={{__html: r.commentText}}/>
                                                {r.likes ? <Button variant='contained' color='primary'
                                                                   onClick={() => this.handleClick(r)}><ThumbUpAltIcon/>{r.likes}
                                                    </Button>
                                                    : <Button variant='contained' color='primary'
                                                              onClick={() => this.handleClick(r)}><ThumbUpAltIcon/>{r.likes !== 0 ? r.likes : 0}
                                                    </Button>
                                                }
                                                {r.replies &&

                                                <div style={{marginLeft: 100}}>
                                                    {_.map(r.replies, (rr) => (
                                                        <>
                                                            <Typography color='primary'>{rr.name}</Typography>
                                                            <span dangerouslySetInnerHTML={{__html: rr.commentText}}/>
                                                        </>
                                                    ))}
                                                </div>
                                                }
                                            </>
                                        ))}
                                    </div>
                                    }
                                </>
                                }
                                <br/>
                            </div>
                        ))}
                    </>
                    }
                </Container>
            </>
        );
    }

}

const mapStateToProps = (state) => ({
        article: state.article.article,
        comments: state.article.comments,
    }
);

const mapDispatchToProps = {
    getArticle,
    getComments
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
export default AppContainer;
