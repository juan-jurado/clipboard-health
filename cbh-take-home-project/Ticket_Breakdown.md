# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1: Allow Facilities to Save Custom IDs for Agents
## Description:
Facilities want to be able to save custom IDs for their Agents to use when generating reports. Currently, Agents are identified by their internal database ID. We need to update our system to allow Facilities to save and use their own custom IDs for Agents.
## Acceptance Criteria:
- Facilities can add and update custom IDs for their Agents through a new "Custom IDs" section in their account settings.
- Custom IDs must be unique per Facility.
- When generating reports, the system will use the custom ID if available, falling back to the internal database ID if not.
- Custom IDs should be displayed prominently in the report.
## Time/Effort Estimate:
4-6 hours
## Implementation Details:
- Add a new table to the database to store custom IDs for Agents.
Create a new "Custom IDs" section in the Facility's account settings page where they can add, edit, and delete custom IDs for their Agents.
- Update the getShiftsByFacility function to include the custom ID when available, falling back to the internal database ID if not.
- Update the generateReport function to display the custom ID in the report when available, falling back to the internal database ID if not.

# Ticket 2: Add Custom IDs to Shift Metadata
## Description:
We need to update the Shifts table in the database to include a field for custom IDs. This will allow Facilities to easily view and filter Shifts by their custom IDs.
## Acceptance Criteria:
- A new field "custom_id" is added to the Shifts table in the database.
- The getShiftsByFacility function is updated to include the custom ID in the Shift metadata.
## Time/Effort Estimate:
2-3 hours
## Implementation Details:
- Add a new column to the Shifts table in the database to store custom IDs.
- Update the getShiftsByFacility function to include the custom ID in the Shift metadata.

# Ticket 3: Update generateReport to Use Custom IDs
## Description:
We need to update the generateReport function to use the custom ID for Agents when generating reports for Facilities.
## Acceptance Criteria:
- The generateReport function is updated to use the custom ID for Agents when available, falling back to the internal database ID if not.
- Custom IDs should be displayed prominently in the report.
## Time/Effort Estimate:
1-2 hours
## Implementation Details:
- Update the generateReport function to use the custom ID for Agents when available, falling back to the internal database ID if not.
- Display the custom ID prominently in the report.

# Ticket 4: Add Custom ID Validation to Facility Form
## Description:
We need to update the Facility registration and editing forms to include validation for custom IDs. This will ensure that each custom ID is unique per Facility.
## Acceptance Criteria:
- The Facility registration and editing forms include a field for custom IDs.
- The field is validated to ensure that each custom ID is unique per Facility.
- If a Facility attempts to save a custom ID that is already in use by another Agent, they should be shown an error message.
## Time/Effort Estimate:
3-4 hours
## Implementation Details:
- Add a new field for custom IDs to the Facility registration and editing forms.
- Add validation to ensure that each custom ID is unique per Facility.
- Show an error message if a Facility attempts to save a custom ID that is already in use by another Agent.

# Ticket 5: Update Shift Editing Form to Include Custom IDs
## Description:
We need to update the Shift editing form to include a field for custom IDs. This will allow Facilities to easily update the custom IDs for Agents on each Shift.
## Acceptance Criteria:
- The Shift editing form includes a field for custom IDs.
- The custom ID field is pre-filled with the current custom ID for the Agent, falling back to the internal database ID if no custom ID exists.
- When the Shift is saved, the custom ID for the Agent is updated in the database.
## Time/Effort Estimate:
2-3 hours
## Implementation Details:
- Add a new field for custom IDs to the Shift editing form.
- Pre-fill the custom ID field with the current custom ID for the Agent, falling back to the internal database ID if no custom ID exists.
- Update the Shift metadata in the database with the new custom ID when the Shift is saved.