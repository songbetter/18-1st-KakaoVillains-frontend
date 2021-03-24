import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ShareModal from './Modal/ShareModal';
import SubNav from '../../Components/SubNav';
import Comment from '../Comment/Comment';
import CommentBox from '../Comment/Components/CommentBox/CommetBox';
import Footer from '../../Components/Footer';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import { BsReply } from 'react-icons/bs';
import './Feed.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      value: '',
      commentList: [],
      content: [],
    };
  }

  componentDidMount() {
    fetch(`http://10.58.4.39:8000/feed/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => this.setState({ content: data.result }));
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const title = '게시물';
    //console.log(this.state.content);
    return (
      <>
        <SubNav title={title} />
        <div className="feedPage">
          <div className="feedBox">
            <div className="feedBoxHeader">
              <div className="feedBoxHeaderImg">
                <img
                  className="headerImg"
                  src={this.state.content?.[0]?.profile_picture}
                  alt="이미지"
                />
              </div>
              <div className="nameAndTime">
                <div className="characterName">
                  {this.state.content?.username}
                </div>
                <div className="time">{this.state.content?.[0]?.datetime}</div>
              </div>
            </div>
            <StyledSlider className="feedBoxImg" {...settings}>
              {this.state.content?.[0]?.image_url.map((list, index) => (
                <img key={index} className="mainImg" src={list} alt="이미지" />
              ))}
            </StyledSlider>
            <div className="feedBoxIcon">
              {this.state.isLoginModalView ? '' : ''}
              {this.state.heartColor ? (
                <div className="heartIcon">
                  <button onClick={this.colorChangeBtn}>
                    <FaRegHeart size="24" />
                  </button>
                </div>
              ) : (
                <div className="heartIconColorChange">
                  <button onClick={this.colorChangeBtn}>
                    <FaHeart color="red" size="24" />
                  </button>
                </div>
              )}
              <div className="chatIcon">
                <button onClick={this.goToFeedDetail}>
                  <BsChat size="24" />
                </button>
              </div>
              <div className="replyIcon">
                {this.state.isShareModalView && (
                  <ShareModal shareHandleModal={this.shareHandleModal} />
                )}
                <button onClick={this.shareHandleModal}>
                  <BsReply size="32" />
                </button>
              </div>
            </div>
            <div className="feedLikeCount">
              좋아요
              <span className="feedLikeCountUpDown">
                {this.state.content?.[0]?.like_count}
              </span>
              개
            </div>
            <p className="feedContentTitle">{this.state.content?.[0]?.title}</p>
            <p className="feedContent">{this.state.content?.[0]?.content}</p>
          </div>
          <Comment />
          {this.state.content?.[0]?.reply.map(comment => (
            <CommentBox
              key={comment.id}
              name={comment.reply_username}
              text={comment.reply_content}
              likeCount={comment.like_count}
              createdAt={comment.datetime}
            />
          ))}
        </div>
        <div className="moreContainer">
          <button id="moreBtn">더보기+</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Feed;

const StyledSlider = styled(Slider)`
  ul.slick-dots {
    margin-bottom: -20px;
  }

  .slick-prev {
    poacity: 0.6;
    margin-left: 45px;
    z-index: 9;
  }

  .slick-next {
    margin-right: 60px;
    poactiy: 0.6;
  }

  .slick-prev:before {
    color: black;
    font-size: 30px;
  }
  .slick-next:before {
    color: black;
    font-size: 30px;
  }

  .slick-disabled {
    display: none !important;
  }
`;
