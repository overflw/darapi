from app.models.controllers import *
from app.crud.controllers import controllers_crud
from app.db.mongodb import AsyncIOMotorClient


async def handle_post_item(
    item: ItemBase,
    controller_id: str,
    db: AsyncIOMotorClient
) -> Any:

    # TODO Verify that the submitted WF is functional

    # TODO How to update wf details in db??

    filter_query = {
        "controller_id": controller_id,
    }
    # Check whether we have already a controller in db
    controller_from_db = await controllers_crud.read(db=db, filter=filter_query)
    if controller_from_db != None:
        # Update existing item in db
        # resulting_item = await controllers_crud.update(db, controller_from_db.id, item)
        pass
    else:
        # Create a new item and submit it to the db
        # TODO How to create an item with a specific id?

        

        controller_from_db = await controllers_crud.create(db=db, doc_in=item)

    return controller_from_db
