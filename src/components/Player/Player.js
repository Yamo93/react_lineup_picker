import React from 'react';
import classes from './Player.module.css';

const player = (props) => {
    let Player = [classes.Player];

    switch (props.formation) {
        case ('4-3-2-1'): {
            switch (props.position) {
                case ("centralForward"): {
                    Player.push(classes.CF);
                    break;
                }
        
                case ("rightForward"): {
                    Player.push(classes.RF);
                    break;
                }
        
                case ("leftForward"): {
                    Player.push(classes.LF);
                    break;
                }
        
                case ("rightMid"): {
                    Player.push(classes.RM);
                    break;
                }
        
                case ("centralMid"): {
                    Player.push(classes.CM);
                    break;
                }
        
                case ("leftMid"): {
                    Player.push(classes.LM);
                    break;
                }
        
                case ("rightDef"): {
                    Player.push(classes.RD);
                    break;
                }
        
                case ("midRightDef"): {
                    Player.push(classes.MRD);
                    break;
                }
        
                case ("midLeftDef"): {
                    Player.push(classes.MLD);
                    break;
                }
        
                case ("leftDef"): {
                    Player.push(classes.LD);
                    break;
                }
        
                case ("goalKeeper"): {
                    Player.push(classes.GK);
                    break;
                }
        
                default: {
                    //console.log('lol');
                    break;
                }
                
            }

            break;
        }

        case ("4-4-2"): {
            console.log('yeah we in it');
            switch (props.position) {
                case ("rightForward"): {
                    Player.push(classes.RF442);
                    break;
                }
        
                case ("leftForward"): {
                    Player.push(classes.LF442);
                    break;
                }
        
                case ("rightMid"): {
                    Player.push(classes.RM442);
                    break;
                }
        
                case ("centralRightMid"): {
                    Player.push(classes.CRM442);
                    break;
                }
        
                case ("centralLeftMid"): {
                    Player.push(classes.CLM442);
                    break;
                }
        
                case ("leftMid"): {
                    Player.push(classes.LM442);
                    break;
                }
        
                case ("rightDef"): {
                    Player.push(classes.RD442);
                    break;
                }
        
                case ("midRightDef"): {
                    Player.push(classes.MRD442);
                    break;
                }
        
                case ("midLeftDef"): {
                    Player.push(classes.MLD442);
                    break;
                }
        
                case ("leftDef"): {
                    Player.push(classes.LD442);
                    break;
                }
        
                case ("goalKeeper"): {
                    Player.push(classes.GK442);
                    break;
                }
        
                default: {
                    //console.log('lol');
                    break;
                }
                
            }

            break;
        }

        case ("4-3-3"): {
            break;
        }

        default: {
            break;
        }
    }



    return (
        <div title={props.playerName} data-number={props.playerNumber} className={Player.join(' ')}>
            <div className={classes.Shirt}></div>
            <div className={classes.Pants}></div>
        </div>
    );
}

export default player;