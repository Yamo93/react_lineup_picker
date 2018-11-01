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

        case ('4-3-3'): {
            switch (props.position) {
                case ("centralForward"): {
                    Player.push(classes.CF433);
                    break;
                }
        
                case ("rightForward"): {
                    Player.push(classes.RF433);
                    break;
                }
        
                case ("leftForward"): {
                    Player.push(classes.LF433);
                    break;
                }
        
                case ("rightMid"): {
                    Player.push(classes.RM433);
                    break;
                }
        
                case ("centralMid"): {
                    Player.push(classes.CM433);
                    break;
                }
        
                case ("leftMid"): {
                    Player.push(classes.LM433);
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

        case ('3-4-3'): {
            switch (props.position) {
                case ("centralForward"): {
                    Player.push(classes.CF343);
                    break;
                }
        
                case ("rightForward"): {
                    Player.push(classes.RF343);
                    break;
                }
        
                case ("leftForward"): {
                    Player.push(classes.LF343);
                    break;
                }
        
                case ("rightMid"): {
                    Player.push(classes.RM343);
                    break;
                }
        
                case ("centralLeftMid"): {
                    Player.push(classes.CLM343);
                    break;
                }
        
                case ("centralRightMid"): {
                    Player.push(classes.CRM343);
                    break;
                }
        
                case ("leftMid"): {
                    Player.push(classes.LM343);
                    break;
                }
        
                case ("rightDef"): {
                    Player.push(classes.RD343);
                    break;
                }
        
                case ("midDef"): {
                    Player.push(classes.MD343);
                    break;
                }
        
                case ("leftDef"): {
                    Player.push(classes.LD343);
                    break;
                }
        
                case ("goalKeeper"): {
                    Player.push(classes.GK343);
                    break;
                }
        
                default: {
                    //console.log('lol');
                    break;
                }
                
            }

            break;
        }

        case ('3-5-2'): {
            switch (props.position) {
                case ("rightForward"): {
                    Player.push(classes.RF352);
                    break;
                }
        
                case ("rightMid"): {
                    Player.push(classes.RM352);
                    break;
                }
        
                case ("leftForward"): {
                    Player.push(classes.LF352);
                    break;
                }
        
                case ("centralLeftMid"): {
                    Player.push(classes.CLM352);
                    break;
                }
        
                case ("centralRightMid"): {
                    Player.push(classes.CRM352);
                    break;
                }
        
                case ("centralMid"): {
                    Player.push(classes.CM352);
                    break;
                }
        
                case ("leftMid"): {
                    Player.push(classes.LM352);
                    break;
                }
        
                case ("rightDef"): {
                    Player.push(classes.RD352);
                    break;
                }
        
                case ("midDef"): {
                    Player.push(classes.MD352);
                    break;
                }
        
                case ("leftDef"): {
                    Player.push(classes.LD352);
                    break;
                }
        
                case ("goalKeeper"): {
                    Player.push(classes.GK352);
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