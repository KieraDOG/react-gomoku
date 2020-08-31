import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleConfigurationChange } from '../../../../redux/store/game';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import FormControl from '../../../../components/FormControl';
import Piece from '../../../../components/Piece';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Players = ({
  players,
  handlePlayerNameChange,
}) => (
  <React.Fragment>
    {players.map((p, i) => (
      <FormControl key={p.label} label={p.label}>
        <Layout>
          <Piece color={p.color} />
          &nbsp;
          <TextInput value={p.name} onChange={handlePlayerNameChange(i)} />
          &nbsp;
          <Button>COMPUTER</Button>
        </Layout>
      </FormControl>
    ))}
  </React.Fragment>
);

const mapStateToProps = ({ game }) => ({
  players: game.configuration.players,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayerNameChange: (index) => (event) => {
    event.preventDefault();

    dispatch(handleConfigurationChange({
      path: ['players', index, 'name'],
      value: event.target.value,
    }));
  },
});

const ConnectedPlayers = connect(mapStateToProps, mapDispatchToProps)(Players);

export default ConnectedPlayers;