import * as React from 'react'

import {
    provideFluentDesignSystem,
    fluentDivider
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDivider()
    );

export default function Empty() {

  React.useEffect(() => {


    return () => { // clean-up function
    }
  }, [])

  return (
    <div className='container'>
      <h1 className='heading'>
          Empty Page
      </h1>

      <fluent-divider></fluent-divider>

    </div>
  );

}
