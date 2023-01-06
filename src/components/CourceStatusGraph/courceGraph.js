import "./courceGraph.scss"



const CourceGraph = ({percentageOfDone}) => {
    // full circle of the full cource status bar is strokeDasharray:500 ( 2 * PI * RADIUS )
    // we need to calculate the number to put in dashOffset with this eqation = fullCircle - (perscentage * fullCircle)
    const syncDoneWithStatusBar = Math.round(500 - (percentageOfDone * 500))
    
    return (
        <div class="circle">
          <h1>Diploma</h1>
          <svg>
            <circle class="bg" cx="50%" cy="50%" r="80" />
            <text x="10" y="10" text-anchor="middle" fill="#00000" dy="">
               <tspan x="50%" dy="50%">{Math.round(percentageOfDone * 100)}%</tspan>
            </text>
            <circle style={{strokeDashoffset : `${syncDoneWithStatusBar}`}} class="meter" cx="50%" cy="50%" r="80" />
          </svg>
        </div>
    )
}


export default CourceGraph