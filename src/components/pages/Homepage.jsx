import React, { useState, useEffect, Component, useMemo, useCallback } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Input, Space, Button, Card, Collapse, Carousel, List, Slider, Radio, Cascader, Popover } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Link } from 'react-router-dom';


import {
  useGetMyUrlQuery,
} from '../../services/Api';

import Game from '../game';
import Result from '../result';
import future from '../../images/holoman future.png';
import rock from '../../images/rockHouse.png';
import paper from '../../images/paperHouse.png';
import scissors from '../../images/scissorsHouse.png';

const { Paragraph } = Typography;
const { Title } = Typography;
const { Panel } = Collapse;

const Heading = () => {
  return <h1>Are you a master of chance ?</h1>;
};

const Homepage = () => {
  const [myPick, setMyPick] = useState("");
  const [housePick, setHousePick] = useState("");
  const [houseImage, setHouseImage] = useState("");

  const randomPick = () => {
    const choices = ["rock", "paper", "scissors"];
    const images = [rock, paper, scissors];
    const randomIndex = Math.floor(Math.random() * Math.floor(3));
    setHousePick(choices[randomIndex]);
    setHouseImage(images[randomIndex]);
  };

  const setPicks = (item) => {
    setMyPick(item);
    randomPick();
  };


  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  const setHouseHand = () => {
    if (housePick == rock) {
      return rock
    } else if (housePick == paper) {
      return paper
    } else if (housePick == scissors) {
      return scissors
    }

  }

  return (
    <>
      <Col>
        <div style={{ height: "20vh" }} />
          <Row>

            <Col xs={2} sm={2} md={2} xl={4} />

            <Col xs={20} sm={20} md={20} xl={16} align="middle">
              {/* <Heading /> */}
              <h1>Are you a master of probability?</h1>
              <Row justify="center">
                <h1>> defeat holoman 10 times </h1>
                <h1> and win a free mint !</h1>
                
                <Popover
                  content={
                    <>
                    <p>holoman is a master of time</p>
                    <p>he greets you with this message:</p>
                    <p>" the past is heavy as rock "</p>
                    <p>" the present is light as paper "</p>
                    <p>" and the future is sharp as shears "</p>
                    {/* <p>holoman is a master of time</p>
                    <p>in the past the present will rhyme</p>
                    <p>so present the future sublime </p>
                    <p>and when future is past you will be fine</p> */}
                    <a onClick={hide}>Close</a>
                    </>
                  }
                  trigger="click"
                  visible={visible}
                  onVisibleChange={handleVisibleChange}
                >
                  <Button style={{marginLeft: 20}} type="primary">hint</Button>
                </Popover>
              </Row>

                  <img alt="" src={future} style={{width:"100px"}} />
                  <br />
                  <br />
                  <img alt="" src={houseImage} style={{width:"100px"}} />
                  <br />  
                  <br />  
                  <br />  
              <Row justify="space-around">
                
                <Game setPicks={setPicks} />
              </Row>

              <div className="score">
                {myPick && <Result myPick={myPick} housePick={housePick} />}
              </div>
                  

            </Col>

          </Row>
        <div style={{ height: "60vh" }}>
        </div>
        <div style={{ height: "20vh" }} />
      </Col>
    </>
  )
}

export default Homepage