import React, { Component } from 'react';
import Quote from '../Quote'
import './RandomQuote.css';

class RandomQuote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes : [
        {
          id : 0,
          author : 'Carol Burnett',
          quote : 'Only I can change my life. No one can do it for me.'
        },
        {
          id : 1,
          author : 'Charles R. Swindoll',
          quote : 'Life is 10% what happens to you and 90% how you react to it.'
        },
        {
          id : 2,
          author : "Madeleine L'Engle",
          quote : 'You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.'
        },
        {
          id : 3,
          author : 'Stephen King',
          quote : "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."
        },
        {
          id : 4,
          author : 'Anaïs Nin',
          quote : "We write to taste life twice, in the moment and in retrospect."
        },
        {
          id : 5,
          author : 'Mark Twain',
          quote : "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be."
        },
        {
          id : 6,
          author : 'Toni Morrison',
          quote : "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
        },
        {
          id : 7,
          author : 'Jack Kerouac, The Dharma Bums',
          quote : "One day I will find the right words, and they will be simple."
        },
        {
          id : 8,
          author : 'Benjamin Franklin',
          quote : "Either write something worth reading or do something worth writing."
        },
        {
          id : 9,
          author : 'Saul Bellow',
          quote : "You never have to change anything you got up in the middle of the night to write."
        },
        {
          id : 10,
          author : 'William Faulkner',
          quote : "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window."
        },
        {
          id : 11,
          author : 'Virginia Woolf',
          quote : "Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money."
        },
      ],
      currentQuote : {
        id : undefined,
        quote : undefined,
        author : undefined,
      }
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.getRandomQuote();
  }
  
  getRandomQuote(){
    let {id, quote, author} = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];

    this.setState({currentQuote : {id, quote, author}})
    return this.state.currentQuote;
  }

  handleClick(){
    const {id} = this.state.currentQuote.id;
    this.getRandomQuote();
    while(this.state.currentQuote.id === id){
      this.getRandomQuote();
    }
  }

  render() {

    const { quote, author} = this.state.currentQuote;

    return (
      <div id='quote-box'>
        <Quote quote={quote} author={author}/>
        <div className='myButtons'>
          <a 
            id='tweet-quote'
            href='twitter.com/intent/tweet'>
            <i className="fab fa-twitter-square fa-3x"/></a>
            <button
              id='new-quote'
              onClick={() => this.handleClick()}
            >New Quote</button>
        </div>
      </div>
    );
  }
}

export default RandomQuote;