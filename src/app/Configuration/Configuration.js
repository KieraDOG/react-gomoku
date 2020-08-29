import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import { GAME_STATUS } from '../../constants';
import FormControl from '../../components/FormControl';
import Button from '../../components/Button';
import Size from './components/Size';
import Players from './components/Players';
import { join } from '../../store/players/players';
import { setSize } from '../../store/board/board';
import { run } from '../../store/game';

const NoScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  background: white;
  padding: 32px 24px;
`;

const Configuration = ({
  status,
  handleSubmit,
}) => {
  if (status !== GAME_STATUS.PREPARE) {
    return null;
  }

  return (
    <React.Fragment>
      <NoScroll />
      <Layout>
        <Form onSubmit={handleSubmit}>
          <Size />
          <Players />
          <FormControl>
            <Button>Start</Button>
          </FormControl>
        </Form>
      </Layout>
    </React.Fragment>
  )
};

const mapStateToProps = ({ game }) => ({
  status: game.status,
  configuration: game.configuration,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayerJoin: (player) => dispatch(join(player)),
  handleSizeSet: (size) => dispatch(setSize(size)),
  startGame: () => dispatch(run(GAME_STATUS.PLAY)),
});

const mergeProps = (state, dispatch) => ({
  status: state.status,
  handleSubmit: (event) => {
    const { configuration } = state;
    const { handlePlayerJoin, handleSizeSet, startGame } = dispatch;
    
    event.preventDefault();

    configuration.players.forEach((player) => {
      handlePlayerJoin({
        name: player.name,
        color: player.color,
      });
    });

    handleSizeSet({
      xs: configuration.size.xs,
      ys: configuration.size.ys,
    });

    startGame();
  }
})

const ConnectedConfiguration = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Configuration);

export default ConnectedConfiguration;
