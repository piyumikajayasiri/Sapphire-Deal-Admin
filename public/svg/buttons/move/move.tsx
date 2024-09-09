import React from 'react';

interface IconProps {
  className?: string;
}

const MoveIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='18'
    height='29'
    fill='none'
    viewBox='0 0 18 29'
  >
    <path fill='url(#pattern0_1041_1174)' d='M0 0H18V29H0z'></path>
    <defs>
      <pattern
        id='pattern0_1041_1174'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use
          transform='matrix(.01 0 0 .0062 0 .19)'
          xlinkHref='#image0_1041_1174'
        ></use>
      </pattern>
      <image
        id='image0_1041_1174'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuklEQVR4nO2d227cRByH/SqoEpA2BNpAOKRNW664oRdFrVBDgjglaTm1HFqJIraXPaDmNfoAXILyBCgIrhAXCCQSEqBJIJGKKHxoyKxwrJmxd2N7/rb/n7RStDvRzPiz9+CZ+U2SKEqZADPAj8D3wLQe3YgA88A//I/5+y2VEkfGQkaGSokFcNEhIivlzWgN7BLApRwZaSkXYre31QDvFZShUmqQ8f6AMtJSzlfewC4BfDCkjLSUhdj9aAXAh56DvAHcdjx/A/jNI2U+dn/aLOMJ4EXHa+a5I8Bdj5S52P1qJMBljwxzoB+3ZZxC7GvjHil/Ay/H7l+jAK7kycgTYl9/GtjySJmN1sEmAXzikbEOjGXKBoXYMpPAH45y9/XeV76M457bIWvAqKN8rhBb7phHyp/AweFPn5YDXHUctJ+BQ57yhYSkZG87yus3r4CQSfv+3mcVGAmULyzElj8B7GTeth7NPVO6DPAC8AVwB3ggp+xAQuz/TABLwJfA2dI70GUYQoiiQroDeoXIAhUiC1SILFAhskCFyAIVIgtUiCxQIbJAhcgCFSILVIgsUCGyQIXIAhUiC1TInoNx0C6YiTYEijAhtj2LwHN1VzxtZ2z0x6XP1doAgUIc8497da7pMxLSfFVL5bKFfONoy7WqK511yDAsVVpxM4R85mhLdVLMfNjMFJ0+ZlrNRCWVNkvIATttqXopwCsBGc+WWllDhdj2PASseKRcL6uSVwMyTpZSSUuEpKSsViIlIGM7tgypQmy7Hi5dCvBaQMaJRAAIFWIwM/WBX0qRArwekHE8EQKChRjMj+Z9SwHe8MjYBJ5KBIFwISkpvw4lJUfGk4kwaIAQA/DYwFJMFIVnsYzhJnBG4GPR0dZFAe1yPczqYAr9TgFeCshQ6uHttJAfaqpU8bOSFmICwJS4fJe9aahvWfEwN2xPZT9H3glIuSHgQ/FMwz/UbwZkuKMJgXc9Uv6LskiEQXO+9o578leMjJlh09o20ikKEqABQgIRH/kyCkoZT4SAcCHAM55oj+IyCkTpGdtHEgEgWEipMgpE6pnckUdK70VLhNgAhN9LlVEgWm/dlT/SdSHA0cpkFIjYW/PlkHRRCP6Qm/JkpCr7yCNlNS8CowtC2I3s2PHIqCYCHfjYI+VOJRU2S8hSrTJyAsY+r7TSZghZrl1GRkr/F70Z0DpdS8WyhZxLTSK8V/v0WmDKBo5FG0lEkJDUcO0c8GDSRRAmpPOgQmSBCpEFKkQWqBBZoEJkgQqRBSpEFqgQWaBCZIEKkQUqRBaoEFmgQmSBCpEFKkQWqJDahkKX7aSBiQo2dDlgc0m+NtObSu9Am2B3CDQdbrMTWhM/xJZHI44F/TrCGDhg84OsjR9wU7BDdoOxLLdzz5Suwu4Z3A9GS2NmAx7bx7Z5o3aWpYt609+aBnun02SlTA6xseSYnYfsop7Ut6YDnAX+8rx9TQ2w9Woo2kJllCRlqx/xkbM5sUlPUBk1XSmbZoJeYPvuw4EoC70ySkhAve9ZXvep4/lbnjV91YdSdgX8V8og6JUhSEqv1MYo+5KiMgRJ6VXaGGUgKSpDkJRerY1RglJURkyA54FvgZ+A81EboySt41/BH97Z9zuHmQAAAABJRU5ErkJggg=='
      ></image>
    </defs>
  </svg>
);

export default MoveIcon;
