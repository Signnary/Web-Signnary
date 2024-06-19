import attributes from './attributes.json';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';
import { LandingPage } from './LandingPage';

export default { title: 'LandingPage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={LandingPage} />;
}
