class Api::ItemsController < ApplicationController
  before_action :set_menu
  
  def index
    render json: menu.items
  end 

 
  def create
    item = menu.items.new(item_params)
    
    if (item.save)
      render json: menu
    else
      render json: {errors: item.errors}
    end

  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
    render json: menu
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: {message: 'Item Deleted'}
  end 
  
  private
  def set_menu
    menu = Menu.find(params[:menu_id])
  end 

  def item_params
    params.require(:item).permit(:name, description:, price:)
  end 
end
