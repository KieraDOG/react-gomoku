import React from 'react';
import { connect } from 'react-redux';
import { handleConfigurationChange } from '../../../../store/game';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import FormControl from '../../../../components/FormControl';

const Players = ({
  players,
  handlePlayerNameChange,
}) => (
  <React.Fragment>
    {players.map((p, i) => (
      <FormControl key={p.label} label={p.label}>
        <div>
          <TextInput value={p.name} onChange={handlePlayerNameChange(i)} />
          &nbsp;
          <Button>COMPUTER</Button>
        </div>
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