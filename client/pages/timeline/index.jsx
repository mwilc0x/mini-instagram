import { render } from 'inferno';
import Document from 'components/document';
import Header from 'components/header';
import PhotoGrid from 'components/photo-grid';

import './style.scss';

export default function Timeline({ data = [] }) {
  return (
    <Document title="Home" stylesheet="bundle">
      <Header />
      <div className="timeline">
        <PhotoGrid data={data} />
      </div>
    </Document>
  );
}

Timeline.GraphQL = ({ accessToken }) => `
  query TimelinePage {
    root {
      users {
        media(token: "${accessToken}") {
          ...photoGridFragment
        }
      }
    }
  }

  ${PhotoGrid.GraphQL}
`;
