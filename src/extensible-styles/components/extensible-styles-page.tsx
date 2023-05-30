import React from 'react';
import { NormalButton, ButtonType } from './normal-button';
import { CustomButton } from './custom-button';

export function ExtensibleStylesPage() {
  return (
    <>
      <h2>Extensible Styles</h2>
      <p>Sigue las instrucciones que vienen en el curso.</p>

      <NormalButton name="Send" onClick={() => {}} type={ButtonType.submit}>
        children
      </NormalButton>
      <CustomButton
        className="btn btn-success"
        style={{
          backgroundColor: 'red',
          border: '5px solid #cccccc',
        }}
        name="Send"
        onClick={() => {}}
        type={ButtonType.submit}
      >
        children
      </CustomButton>
    </>
  );
}
