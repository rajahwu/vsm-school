# Tyler Launch - After Action Review

**Project**: Onboarding Flow v2
**Timeline**: November 2024 (4 weeks)
**Outcome**: Shipped on time, 2 days buffer remaining

---

## What Worked Well

### 1. Early User Research Paid Off
- 5 user interviews in Week 1 uncovered the main pain point (confusing step 3)
- This insight drove the entire redesign focus
- **Impact**: 40% reduction in drop-off at step 3

### 2. Parallel Workstreams
- Design and tech planning ran simultaneously in Week 1
- Frontend could start with wireframes while waiting for high-fi
- **Impact**: Saved 3 days of sequential waiting

### 3. Daily Standups Kept Blockers Visible
- API delay surfaced immediately (day 3 of Week 2)
- Team pivoted to mock data for frontend development
- **Impact**: Zero lost development time despite backend delay

### 4. Visual Journey Diagram
- Shared single-page view kept everyone aligned
- Stakeholders referenced it in every meeting
- **Impact**: No scope creep, clear definition of done

---

## What Blocked Progress

### 1. API Dependency (2-day delay)
- **What happened**: Third-party auth service had unexpected downtime
- **Detection**: Caught on day 3 of Week 2
- **Resolution**: Built with mock data, integrated real API in Week 3
- **Prevention**: Add service health monitoring to kickoff checklist

### 2. Design Review Scheduling
- **What happened**: Key stakeholder unavailable for 2 days
- **Detection**: Found out day before scheduled review
- **Resolution**: Async feedback via Loom video
- **Prevention**: Book all review meetings in Week 0

### 3. Unclear QA Criteria
- **What happened**: QA started testing without acceptance criteria
- **Detection**: QA filed 12 "bugs" that were actually intentional
- **Resolution**: Added AC to each Jira ticket retrospectively
- **Prevention**: AC sign-off required before moving to dev

---

## Experiments for Next Time

### 1. Pre-mortem Session
**Hypothesis**: Identifying risks before kickoff prevents mid-project surprises
**How to test**: Run 30-min pre-mortem in Week 0, track if predicted risks occur
**Success metric**: 80% of actual blockers were predicted

### 2. Tighter Design-Dev Handoff
**Hypothesis**: Developers reviewing wireframes catches issues earlier
**How to test**: Invite dev lead to wireframe review (not just high-fi)
**Success metric**: Zero "this isn't buildable" feedback at high-fi stage

### 3. Automated Dependency Alerts
**Hypothesis**: Earlier warning on external service issues saves time
**How to test**: Set up PagerDuty for critical third-party services
**Success metric**: Detect issues within 1 hour vs current 1 day

---

## Metrics Summary

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Ship date | Nov 28 | Nov 26 | ✅ Early |
| Step 3 drop-off | -30% | -40% | ✅ Exceeded |
| Bug count (launch) | <5 | 3 | ✅ Met |
| Team satisfaction | 4/5 | 4.2/5 | ✅ Met |

---

## Action Items

- [ ] Add pre-mortem template to project kickoff checklist
- [ ] Create service health dashboard for dependencies
- [ ] Update Jira workflow to require AC before "Ready for Dev"
- [ ] Schedule design reviews 1 week in advance

---

*AAR completed: November 30, 2024*
*Next review: Q1 2025 planning*
