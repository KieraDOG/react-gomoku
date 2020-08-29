import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/TextInput';
import FormControl from '../../../../components/FormControl';
import { handleConfigurationChange } from '../../../../store/game';

const Size = ({
  xs,
  ys,
  handleSizeChange,
}) => (
  <FormControl label="Size">
    <div>
      <TextInput value={xs} onChange={handleSizeChange('xs')} width="3rem" />
      &nbsp;
      *
      &nbsp;
      <TextInput value={ys} onChange={handleSizeChange('ys')} width="3rem" />
    </div>
  </FormControl>
);

const mapStateToProps = ({ game }) => ({
  xs: game.configuration.size.xs,
  ys: game.configuration.size.ys,
});

const mapDispatchToProps = (dispatch) => ({
  handleSizeChange: (key) => (event) => {
    event.preventDefault();

    dispatch(handleConfigurationChange({
      path: ['size', key],
      value: event.target.value,
    }));
  },
});

const ConnectSize = connect(mapStateToProps, mapDispatchToProps)(Size);

export default ConnectSize;
