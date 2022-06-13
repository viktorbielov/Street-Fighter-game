import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  if(fighter) {
    const fighterImg = createFighterImage(fighter);
    const fighterDetailsWrapper = createElement({
      tagName: 'div',
      className: 'fighter-details__wrapper'
    });
    const fighterName = createElement({
      tagName: 'h2',
      className: 'fighter-details__title'
    });
    fighterName.innerText = fighter.name;
    const fighterStats = createFighterStats(fighter);
    fighterDetailsWrapper.append(fighterName, fighterStats);
    fighterElement.append(fighterImg, fighterDetailsWrapper);
  }
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}

function createFighterStats(fighter) {
  const fighterStats = createElement({
    tagName: 'div',
    className: 'fighter-details__stats'
  });
  const healthCell = createFighterStatCell('health', fighter.health);
  const attackCell = createFighterStatCell('attack', fighter.attack);
  const defenseCell = createFighterStatCell('defense', fighter.defense);
  fighterStats.append(healthCell, attackCell, defenseCell);
  return fighterStats;
}

function createFighterStatCell(label, value) {
  const cell = createElement({
    tagName: 'div',
    className: 'fighter-details__stat-cell'
  });
  const icon = createStatIcon(label);
  const valueElement = createElement({
    tagName: 'p'
  });
  valueElement.innerText = value;
  cell.append(icon, valueElement);
  return cell;
}

function createStatIcon(label) {
  return createElement({
    tagName: 'img',
    className: 'fighter-details__icon',
    attributes: {
      src: `./resources/icons/${label}.png`,
      alt: label
    }
  });
}
